import { Flex, Image } from "@chakra-ui/react";
import React from "react";

export function LogoList(): JSX.Element {
  return (
    <Flex justifyContent="space-evenly" flexWrap="wrap" w="100%" px={10} py={4}>
      <Image src="/images/logos/acm.png" h="7vh" minH="80px" m={8} />
      <Image src="/images/logos/ibm.svg" h="7vh" minH="80px" m={8} />
      <Image src="/images/logos/ieee.svg" h="7vh" minH="70px" m={8} />
      <Image src="/images/logos/clsummit.png" h="7vh" minH="70px" m={8} />
      <Image src="/images/logos/4s.png" h="7vh" maxH="50px" minH="50px" m={8} />
      <Image
        src="/images/logos/ismir.png"
        h="7vh"
        maxH="50px"
        minH="50px"
        m={8}
      />
    </Flex>
  );
}
