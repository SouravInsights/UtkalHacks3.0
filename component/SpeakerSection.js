import React from "react"
import { Box, Text, Stack, Flex, SimpleGrid } from "@chakra-ui/react"
import SpeakerCard from "./Card/SpeakerCard"
import Section from "./Section"

const speakersData = [
    {
        id: "1",
        name: "Vilva Athiban P B",
        title: "Senior JavaScript Developer",
        company: "Omio",
        profilepic: "https://vilvaathiban.com/intro.jpg",
        linkedin: "https://linkedin.com/in/vilvaathiban",
        github: "https://github.com/vilvaathibanpb",
        twitter: "https://twitter.com/vilvaathibanpb",
        website: "https://vilvaathiban.com"
    },
    {
        id: "2",
        name: "Michael Riddering",
        title: "Building FigmaAcademy",
        company: "ShiftNudge",
        profilepic: "https://pbs.twimg.com/profile_images/1345910398722125827/rt_vhp2A_400x400.png",
        linkedin: "https://linkedin.com/in/michaelriddering",
        dribbble: "https://dribbble.com/riddering",
        twitter: "https://twiiter.com/ridderingand",
        website: "https://michaelriddering.com"
    },
    {
        id: "3",
        name: "Darshan Gajara",
        title: "Design Lead",
        company: "GraphCMS",
        profilepic: "https://pbs.twimg.com/profile_images/1117472858836434944/FbWce7CZ_400x400.jpg",
        dribbble: "https://dribbble.com/WeirdoWizard",
        twitter: "https://twitter.com/WeirdoWizard",
        website: "https://darshangajara.com"
    },
    {
        id: "4",
        name: "Jamie Barton",
        title: "Developer Experience Engineer",
        company: "GraphCMS",
        profilepic: "https://pbs.twimg.com/profile_images/1353655926943870976/bz18ljyJ_400x400.jpg",
        linkedin: "https://linkedin.com/in/notrab",
        github: "https://github.com/notrab",
        twitter: "https://twitter.com/notrab",
        website: "https://notrab.dev"
    },
    {
        id: "5",
        name: "Johan Eliasson",
        title: "Founder",
        company: "NHost",
        profilepic: "https://pbs.twimg.com/profile_images/1237013895375728640/F-aV_86L_400x400.jpg",
        linkedin: "https://linkedin.com/in/johan--eliasson",
        github: "https://github.com/elitasson",
        twitter: "https://twitter.com/elitasson"
    }
]

const PrizeSection = () => {
  return (
    <Box>
      <Section center heading="Speakers & Judges" />
      <SimpleGrid columns={[1, 2, 3, 4, 5]} justifyContent="space-between" gap="20px" my="20px">
        {speakersData.map((data) => (
          <SpeakerCard
              key={data.id}
              name={data.name}
              title={data.title}
              company={data.company}
              profilePic={data.profilepic}
              linkedin={data.linkedin}
              dribbble={data.dribbble}
              github={data.github}
              twitter={data.twitter}
              website={data.website}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default PrizeSection
