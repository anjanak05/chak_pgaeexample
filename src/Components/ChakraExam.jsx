import React from 'react';
import { Stack, Button, Box, Input, Heading } from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// import { Icon } from '@chakra-ui/react'
const ChakraExam = () => {
  return (
    <div>
      <Box mt="-489px" display="flex" gap={870}>
        <img
          src="https://www.wework4days.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Flogo.4cc40a9ad62028ac0ab9af556de0b081.svg&w=32&q=75"
          alt="cfsdc"
          width="3.5%"
          height="08"
        />

        <Stack display="flex" flexDirection="row-reverse" gap={25} width="280%">
          <Button
            color="white"
            gap={4}
            bg="#397ecf"
            variant="solid"
            width="45%"
            height="08"
            fontSize={22}
          >
            Post a Job
            <span role="img" aria-label="Rocket">
              {' '}
              🚀
            </span>
          </Button>
          <Button
            colorScheme="#397ecf"
            borderColor="397ecf"
            width="25%"
            height="68"
            variant="outline"
          >
            Sign Up
          </Button>
          <Button colorScheme="black" variant="link">
            Sign In
          </Button>
        </Stack>
      </Box>
      <div>
        <Heading as="h1" size="4xl" noOfLines={1}>
          Find The Right
        </Heading>

        <Heading as="h1" size="4xl" noOfLines={1}>
          Four-Day Week Job
        </Heading>
      </div>
      <br />
      <br />
      
      <Stack spacing={3}>
        <Input boxShadow="xl" width="45%" margin="auto" height="68" />
      </Stack>
      <FontAwesomeIcon icon="fa-light fa-filter" />
      <Box
        display="flex"
        ml={460}
        mt="10"
        gap={5}
        justifycontent="center"
        alignitems="center"
      >
        <Button
          color="white"
          gap={4}
          bg="#397ecf"
          variant="solid"
          fontSize={22}
        >
          <span role="img" aria-label="Rocket">
            {' '}
            🚀
          </span>
          Remote
        </Button>
        <Button
          color="white"
          gap={4}
          bg="#397ecf"
          variant="solid"
          width={160}
          fontSize={22}
        >
          <span role="img" aria-label="Rocket">
            {' '}
            🚀
          </span>
          Tech
        </Button>
        <Button
          color="white"
          gap={4}
          bg="#397ecf"
          variant="solid"
          fontSize={22}
        >
          <span role="img" aria-label="Rocket">
            {' '}
            🚀
          </span>
          Marketing
        </Button>
      </Box>

      {/* <Icon as={MdSettings} /> */}
    </div>
  );
};

export default ChakraExam;
