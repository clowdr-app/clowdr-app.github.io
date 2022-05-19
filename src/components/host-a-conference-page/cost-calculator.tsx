import { CheckIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  Fade,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useMachine } from "@xstate/react";
import type { AnimationDefinition } from "framer-motion/types/render/utils/animation";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import type { InterpreterFrom, Prop, StateFrom } from "xstate";
import { assign, createMachine } from "xstate";

interface MachineContext {
  days: number;
  registrants: number;
  tracksPerDay: number;
  hoursPerTrack: number;
  liveStreamingHours: number;
  socialHoursPerDay: number;
  supportHours: number;
  prerecordedVideoHours: number;
}

type EstimateSizeDefaultsEvent =
  | { type: "quickEstimate"; size: "small" | "medium" | "large" }
  | { type: "detailedEstimate"; size: "small" | "medium" | "large" };

type MachineEvents =
  | { type: "next"; value: number }
  | { type: "previous" }
  | { type: "showBreakdown" }
  | { type: "addSupport" }
  | { type: "startAgain" }
  | { type: "finish"; value: number }
  | { type: "customise" }
  | { type: "saveChanges"; value: MachineContext }
  | { type: "cancel" }
  | EstimateSizeDefaultsEvent;

const machine = createMachine(
  {
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    tsTypes: {} as import("./cost-calculator.typegen").Typegen0,
    schema: {
      context: {} as Partial<MachineContext>,
      events: {} as MachineEvents,
    },
    id: "Cost Calculator",
    initial: "Days",
    states: {
      Days: {
        on: {
          next: {
            actions: "setDays",
            target: "Registrants",
          },
        },
      },
      Registrants: {
        on: {
          next: {
            actions: "setRegistrants",
            target: "Small, Medium, Big",
          },
          previous: {
            target: "Days",
          },
        },
      },
      "Quick Estimate Summary": {
        on: {
          showBreakdown: {
            target: "Estimate breakdown",
          },
          addSupport: {
            target: "Support Hours",
          },
          startAgain: {
            target: "Days",
          },
        },
      },
      "Tracks per day": {
        on: {
          previous: {
            target: "Small, Medium, Big",
          },
          next: {
            actions: "setTracksPerDay",
            target: "Hours per track",
          },
          finish: {
            target: "Estimate breakdown",
          },
        },
      },
      "Hours per track": {
        on: {
          previous: {
            target: "Tracks per day",
          },
          next: {
            actions: "setHoursPerTrack",
            target: "Social hours per day",
          },
          finish: {
            target: "Estimate breakdown",
          },
        },
      },
      "Social hours per day": {
        on: {
          previous: {
            target: "Hours per track",
          },
          next: {
            actions: "setSocialHoursPerDay",
            target: "Live-streaming hours",
          },
          finish: {
            target: "Estimate breakdown",
          },
        },
      },
      "Live-streaming hours": {
        on: {
          previous: {
            target: "Social hours per day",
          },
          next: {
            actions: "setLiveStreaming",
            target: "Pre-recorded presentations",
          },
          finish: {
            target: "Estimate breakdown",
          },
        },
      },
      "Estimate breakdown": {
        on: {
          addSupport: {
            target: "Support Hours",
          },
          customise: {
            target: "Customise Estimate",
          },
          startAgain: {
            target: "Days",
          },
        },
      },
      "Support Hours": {
        on: {
          finish: {
            actions: "setSupportHours",
            target: "Estimate breakdown",
          },
        },
      },
      "Customise Estimate": {
        on: {
          saveChanges: {
            actions: "updateEstimate",
            target: "Estimate breakdown",
          },
          cancel: {
            target: "Estimate breakdown",
          },
        },
      },
      "Small, Medium, Big": {
        on: {
          previous: {
            target: "Registrants",
          },
          quickEstimate: {
            actions: "setApproximateSize",
            target: "Quick Estimate Summary",
          },
          detailedEstimate: {
            actions: "setApproximateSize",
            target: "Tracks per day",
          },
        },
      },
      "Pre-recorded presentations": {
        on: {
          previous: {
            target: "Live-streaming hours",
          },
          finish: {
            target: "Estimate breakdown",
            actions: "setPrerecordedVideoHours",
          },
        },
      },
    },
    context: {
      days: 1,
      registrants: 5,
    },
  },
  {
    actions: {
      setDays: assign({
        days: (_, evt) => evt.value,
      }),
      setApproximateSize: assign<
        Partial<MachineContext>,
        EstimateSizeDefaultsEvent
      >({
        tracksPerDay: typicalTracksPerDay,
        hoursPerTrack: typicalHoursPerTrack,
        liveStreamingHours: (ctx, evt) => {
          // Typically only keynotes are live-streamed.
          // Larger conferences tend to have longer keynotes or more than one per day.
          const days = ctx.days ?? 1;
          switch (evt.size) {
            case "small":
              return days * 1;
            case "medium":
              return days * 1.5;
            case "large":
              return days * 2;
          }
        },
        socialHoursPerDay: (ctx, evt) => {
          // Number of hours per day that registrants spend in social rooms
          // At larger conferences we typically see a lower rate of engagement.
          // For a person that does engage in social time, typically they spend 30 minutes per day.
          // Hours = Registrants * Rate of engagement * Time per engagement
          const registrants = ctx.registrants ?? 5;
          switch (evt.size) {
            case "small":
              return Math.max(1, Math.ceil(registrants * 0.25 * 0.5));
            case "medium":
              return Math.max(1, Math.ceil(registrants * 0.15 * 0.5));
            case "large":
              return Math.max(1, Math.ceil(registrants * 0.1 * 0.5));
          }
        },
        supportHours: (ctx, evt) => {
          // Number of hours of support in total that a conference requires.
          // We deliberately put a low-side estimate on this
          //   - we're trying to cut down on the amount of support we have to provide.
          // Typically 2% of users need some help with their account or similar, which consumes 15 minutes of time.
          // Larger conferences often ask for training or demo sessions.
          // Hours = Training time + (Registrants * Rate of tickets generated * Time per ticket)
          const registrants = ctx.registrants ?? 5;
          switch (evt.size) {
            case "small":
              return 1 + Math.max(0, Math.ceil(registrants * 0.02 * 0.25));
            case "medium":
              return 5 + Math.max(0, Math.ceil(registrants * 0.02 * 0.25));
            case "large":
              return 20 + Math.max(0, Math.ceil(registrants * 0.02 * 0.25));
          }
        },
        prerecordedVideoHours: (ctx, evt) => {
          // Number of hours of pre-recorded video
          // This is typically proportionate to the number of hours of sessions in total
          const tracksPerDay = typicalTracksPerDay(ctx, evt);
          const hoursPerTrack = typicalHoursPerTrack(ctx, evt);
          const hoursPerDay = tracksPerDay * hoursPerTrack;
          const days = ctx.days ?? 1;
          const hours = hoursPerDay * days;

          // Usually about 1/2 of a session involving pre-recorded vidoes it the pre-recorded time,
          // and the rest is Q&A/live discussion.
          return hours * 0.5;
        },
      }),
      setHoursPerTrack: assign({
        hoursPerTrack: (_, evt) => evt.value,
      }),
      setLiveStreaming: assign({
        liveStreamingHours: (_, evt) => evt.value,
      }),
      setRegistrants: assign({
        registrants: (_, evt) => evt.value,
      }),
      setSocialHoursPerDay: assign({
        socialHoursPerDay: (_, evt) => evt.value,
      }),
      setSupportHours: assign({
        supportHours: (_, evt) => evt.value,
      }),
      setTracksPerDay: assign({
        tracksPerDay: (_, evt) => evt.value,
      }),
      setPrerecordedVideoHours: assign({
        prerecordedVideoHours: (_, evt) => evt.value,
      }),
      updateEstimate: assign({
        days: (_, evt) => evt.value.days,
        registrants: (_, evt) => evt.value.registrants,
        tracksPerDay: (_, evt) => evt.value.tracksPerDay,
        hoursPerTrack: (_, evt) => evt.value.hoursPerTrack,
        liveStreamingHours: (_, evt) => evt.value.liveStreamingHours,
        socialHoursPerDay: (_, evt) => evt.value.socialHoursPerDay,
        supportHours: (_, evt) => evt.value.supportHours,
      }),
    },
  }
);

function typicalTracksPerDay(
  _: Partial<MachineContext>,
  evt: EstimateSizeDefaultsEvent
) {
  // Typical number of tracks per day
  switch (evt.size) {
    case "small":
      return 1;
    case "medium":
      return 2;
    case "large":
      return 8;
  }
}

function typicalHoursPerTrack(
  _: Partial<MachineContext>,
  evt: EstimateSizeDefaultsEvent
) {
  // Typical number of hours per track
  switch (evt.size) {
    case "small":
      return 4;
    case "medium":
      return 5;
    case "large":
      return 8;
  }
}

type TState = StateFrom<typeof machine>;
type RunStepArgs = Parameters<Prop<InterpreterFrom<typeof machine>, "send">>;

export function CostCalculator(): JSX.Element {
  const [state, send] = useMachine<typeof machine>(machine);

  const { isOpen, onOpen, onClose } = useDisclosure({
    defaultIsOpen: true,
  });

  const [nextRunArgs, setNextRunArgs] = useState<RunStepArgs | null>(null);

  const onAnimationComplete = useCallback(
    (definition: AnimationDefinition) => {
      console.log("Animation definition", definition);
      if (definition === "exit") {
        if (nextRunArgs) {
          send(...nextRunArgs);
          onOpen();
        } else {
          onOpen();
        }
      }
    },
    [nextRunArgs, onOpen, send]
  );

  const runStep = useCallback(
    (...args: Parameters<typeof send>) => {
      setNextRunArgs(args);
      onClose();
    },
    [onClose]
  );

  const currentScreen = useMemo(() => {
    switch (
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      state.value as import("./cost-calculator.typegen").Typegen0["matchesStates"]
    ) {
      case "Customise Estimate":
        return <>TODO: Customise Estimate</>;
      case "Days":
      case "Social hours per day":
      case "Hours per track":
      case "Live-streaming hours":
      case "Pre-recorded presentations":
      case "Registrants":
      case "Support Hours":
      case "Tracks per day":
        return <SetValueStep state={state} runStep={runStep} />;
      case "Estimate breakdown":
        return <>TODO: Estimate breakdown</>;
      case "Quick Estimate Summary":
        return <>TODO: Quick Estimate Summary</>;
      case "Small, Medium, Big":
        return <SetConferenceSizeStep state={state} runStep={runStep} />;
    }
  }, [runStep, state]);

  return (
    <Fade in={isOpen} onAnimationComplete={onAnimationComplete}>
      <VStack mt={8} spacing={8} id="cost-calculator" alignItems="flex-start">
        {currentScreen}
      </VStack>
    </Fade>
  );
}

function getCurrentValueFromContext(
  ctx: Partial<MachineContext>,
  state: TState["value"]
): number {
  switch (state) {
    case "Days":
      return ctx.days ?? 1;
    case "Total social hours per day":
      return ctx.socialHoursPerDay ?? 2;
    case "Hours per track":
      return ctx.hoursPerTrack ?? 5;
    case "Live-streaming hours":
      return ctx.liveStreamingHours ?? 1;
    case "Pre-recorded presentations":
      return ctx.prerecordedVideoHours ?? 1;
    case "Registrants":
      return ctx.registrants ?? 5;
    case "Support Hours":
      return ctx.supportHours ?? 1;
    case "Tracks per day":
      return ctx.tracksPerDay ?? 1;
  }
  return -1;
}

function SetValueStep({
  state,
  runStep,
}: {
  state: TState;
  runStep: (...args: RunStepArgs) => void;
}): JSX.Element {
  const [value, setValue] = useState<number>(
    getCurrentValueFromContext(state.context, state.value)
  );

  useEffect(() => {
    setValue(getCurrentValueFromContext(state.context, state.value));
  }, [state.context, state.value]);

  const hasPreviousStep = useMemo(() => {
    console.log("state.nextEvents", state.nextEvents);
    return state.nextEvents.includes("previous");
  }, [state.nextEvents]);
  const hasNextStep = useMemo(
    () => state.nextEvents.includes("next"),
    [state.nextEvents]
  );
  const hasFinishStep = useMemo(
    () => state.nextEvents.includes("finish"),
    [state.nextEvents]
  );

  const [title, description, decimalPlaces, minimum] = useMemo(() => {
    switch (state.value) {
      case "Days":
        return [
          "Number of days",
          "The total number of days for sessions/events during your conference, including any co-located events or workshops.",
          0,
          1,
        ];
      case "Social hours per day":
        return [
          "Total time spent in social video-chat per day",
          "The expected total number of hours that registrants will spend in video-chat. Two people chatting to each other for half an hour equals one hour of social video chat. Hours = Number of people * Time spent chatting",
          1,
          0,
        ];
      case "Hours per track":
        return ["Number of hours per track", "", 1, 1];
      case "Live-streaming hours":
        return ["Number of live-streaming hours", "", 1, 0];
      case "Pre-recorded presentations":
        return ["Number of hours of pre-recorded presentations", "", 0, 0];
      case "Registrants":
        return ["Number of registrants", "", 0, 5];
      case "Support Hours":
        return ["Number of support hours", "", 0, 0];
      case "Tracks per day":
        return ["Number of tracks per day", "", 0, 1];
    }
    return [
      "Unrecognised step",
      "Sorry, an error has occurred. Please try again later.",
      0,
      0,
    ];
  }, [state.value]);

  return (
    <>
      <FormControl w="auto">
        <FormLabel>{title}</FormLabel>
        <NumberInput
          min={minimum}
          value={value}
          onChange={(_, value) => setValue(value)}
          maxW="20ch"
          precision={decimalPlaces}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormHelperText>{description}</FormHelperText>
      </FormControl>

      <Flex flexWrap="wrap">
        {hasPreviousStep ? (
          <Button
            onClick={() => {
              runStep({
                type: "previous",
              });
            }}
            mr={2}
            mb={2}
            leftIcon={<ChevronLeftIcon />}
            variant="outline"
          >
            Back
          </Button>
        ) : undefined}
        {hasFinishStep ? (
          <Button
            onClick={() => {
              runStep({
                type: "finish",
                value,
              });
            }}
            mr={2}
            mb={2}
            leftIcon={<CheckIcon />}
            variant={hasNextStep ? "outline" : undefined}
          >
            Finish
          </Button>
        ) : undefined}
        {hasNextStep ? (
          <Button
            onClick={() => {
              runStep({
                type: "next",
                value,
              });
            }}
            mr={2}
            mb={2}
            rightIcon={<ChevronRightIcon />}
          >
            Next
          </Button>
        ) : undefined}
      </Flex>
    </>
  );
}

function SetConferenceSizeStep({
  state,
  runStep,
}: {
  state: TState;
  runStep: (...args: RunStepArgs) => void;
}): JSX.Element {
  const [value, setValue] = useState<"small" | "medium" | "large">("small");

  const hasPreviousStep = useMemo(() => {
    console.log("state.nextEvents", state.nextEvents);
    return state.nextEvents.includes("previous");
  }, [state.nextEvents]);

  return (
    <>
      <FormControl w="auto">
        <FormLabel>How big is your conference?</FormLabel>
        <Select
          value={value}
          onChange={ev => {
            setValue(ev.target.value as "small" | "medium" | "large");
          }}
          maxW="20em"
        >
          <option value="small">Small conference</option>
          <option value="medium">Medium conference</option>
          <option value="large">Large conference</option>
        </Select>
        <FormHelperText>
          Please estimate which bracket your conference falls into. Please refer
          to the examples above for comparison.
        </FormHelperText>
      </FormControl>

      <Flex flexWrap="wrap">
        {hasPreviousStep ? (
          <Button
            onClick={() => {
              runStep({
                type: "previous",
              });
            }}
            mr={2}
            mb={2}
            leftIcon={<ChevronLeftIcon />}
            variant="outline"
          >
            Back
          </Button>
        ) : undefined}
        <Button
          onClick={() => {
            runStep({
              type: "quickEstimate",
              size: value,
            });
          }}
          mr={2}
          mb={2}
          leftIcon={<CheckIcon />}
        >
          Quick estimate
        </Button>
        <Button
          onClick={() => {
            runStep({
              type: "detailedEstimate",
              size: value,
            });
          }}
          mr={2}
          mb={2}
          rightIcon={<ChevronRightIcon />}
          variant="outline"
        >
          Detailed estimate
        </Button>
      </Flex>
    </>
  );
}

interface EstimateValue {
  quantity: number;
  cost: number;
}

interface Estimate {
  baselineService: {
    staticHosting: EstimateValue;
    email: EstimateValue;
    graphQL: EstimateValue;
    database: EstimateValue;
    realtime: EstimateValue;
    monitoring: EstimateValue;
    microServices: EstimateValue;
    serviceProviderSupport: EstimateValue;
  };
  videoChat: {
    participation: EstimateValue;
    recording: EstimateValue;
  };
  liveStreaming: {
    backstageCapture: EstimateValue;
    streaming: EstimateValue;
  };
  videoFiles: {
    prerecorded: EstimateValue;
    recordings: EstimateValue;
  };
  registrants: {
    authentication: EstimateValue;
    userLoad: EstimateValue;
  };
  support: EstimateValue;
  development: EstimateValue;
}

// Quantity = Minimum quantity
// Cost = Price per unit
const priceEstimates: Estimate = {
  baselineService: {
    staticHosting: { quantity: 1, cost: 1 },
    email: { quantity: 1, cost: 1.5 },
    graphQL: { quantity: 1, cost: 3 },
    database: { quantity: 1, cost: 25 },
    realtime: { quantity: 1, cost: 5.3 },
    monitoring: { quantity: 1, cost: 5 },
    microServices: { quantity: 1, cost: 25 },
    serviceProviderSupport: { quantity: 1, cost: 10 },
  },
  videoChat: {
    participation: { quantity: 1, cost: 0.004 },
    recording: { quantity: 5, cost: 0.04 },
  },
  liveStreaming: {
    backstageCapture: { quantity: 5, cost: 0.1 },
    streaming: { quantity: 5, cost: 0.45 },
  },
  videoFiles: {
    prerecorded: { quantity: 5, cost: 0.04 },
    recordings: { quantity: 5, cost: 0.04 },
  },
  registrants: {
    authentication: { quantity: 1, cost: 0.02 },
    userLoad: { quantity: 1, cost: 1 },
  },
  support: { quantity: 0, cost: 150 },
  development: { quantity: 0, cost: 100-0 },
};

function computeEstimate(ctx: Partial<MachineContext>): Estimate | null {
  if (
    typeof ctx.days === "undefined" ||
    typeof ctx.hoursPerTrack === "undefined" ||
    typeof ctx.liveStreamingHours === "undefined" ||
    typeof ctx.prerecordedVideoHours === "undefined" ||
    typeof ctx.registrants === "undefined" ||
    typeof ctx.socialHoursPerDay === "undefined" ||
    typeof ctx.tracksPerDay === "undefined"
  ) {
    return null;
  }

  // return {
  //     baselineService: {
  //         database:
  //     }
  // };
  return null;
}
