// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  eventsCausingActions: {
    setDays: "next";
    setRegistrants: "next";
    setTracksPerDay: "next";
    setHoursPerTrack: "next";
    setSocialHoursPerDay: "next";
    setLiveStreaming: "next";
    setSupportHours: "finish";
    updateEstimate: "saveChanges";
    setApproximateSize: "quickEstimate" | "detailedEstimate";
    setPrerecordedVideoHours: "finish";
  };
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingServices: {};
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates:
    | "Days"
    | "Registrants"
    | "Quick Estimate Summary"
    | "Tracks per day"
    | "Hours per track"
    | "Social hours per day"
    | "Live-streaming hours"
    | "Estimate breakdown"
    | "Support Hours"
    | "Customise Estimate"
    | "Small, Medium, Big"
    | "Pre-recorded presentations";
  tags: never;
}
