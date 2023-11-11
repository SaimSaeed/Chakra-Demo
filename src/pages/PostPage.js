import { Heading, Stack ,Image, Container, HStack, Avatar,Text} from '@chakra-ui/react'
import React, { Component } from 'react'
import thumbnail from "../Assets/thumbnail.png"

export class PostPage extends Component {
  render() {
    return (
      <Container maxW={"container.xl"}>
           <Stack spacing={8} my={4}>
      <Heading size={"2xl"} >
        Fiverr Gig
      </Heading>
      <Image src={thumbnail} alt='thumbnail' borderRadius={"xl"} />
      <HStack>
   <Avatar size={"lg"}/>
    <Text fontWeight={"600"}>
        Saim 
        Saeed
    </Text>
    <Text fontSize={"xs"}>
      1 Min Ago
    </Text>
   </HStack>
   <Text>
   Finding your niche
The best Gig ideas are small, scalable tasks that only take a few minutes to complete.
As a seller, your first assignment should be to break down your skillset into a small offering that makes sense to start selling at $5.
 
Ask yourselves these questions when you define exactly what your Gig will be:

Does it take me a few (5 to 15 minutes) to complete this action?
Is this service scalable? Can I deliver multiples of it in batches?
Are there extra components that could be built into this initial service?

If you answered "yes" to all of these questions, you have a viable Gig on your hands!
 
Research your skill
When you consider creating a Gig, look at similar existing Gigs.
Knowing what other sellers are offering to buyers gives you a sense of what the market for your skill is, and will help you understand what you need to do to succeed.
 
While researching, ask yourself:

Are there any other versions of your Gig already? If so, how many?
Can you distinguish yourself from other sellers? How?
Is there an opportunity to meet an unmet need?
 
If you see that there is already a surplus of sellers offering a service that is identical to your Gig idea, brainstorm how you can distinguish yourself from the rest, and stand out from the crowd. 
 
 
Know your value
Fiverr’s services start at $5. While it can be tempting to offer promotions or discounts to get your orders rolling in from the start, offering your work for free is not a recommended approach to connect with or entice potential buyers.

Set your potential buyers' expectations and set the precedent that your work can’t be obtained for free. It’s essential to know your worth as a seller and not to compromise it to attempt to attract buyers.

 
Establish a workflow
Getting organized before your orders start rolling in can only benefit you—so it's essential to establish a process for how you will complete orders.
 
To come up with an organized game plan, think about the different aspects of your process, such as:

What time of day—or what time each week—will I dedicate to working on my Gigs?
How can I set up a productive workspace?
What materials do I need to work on my Gigs?
 

Taking the time to plan out your workflow will help keep things more organized and simple when you create your Gig.
   </Text>
    </Stack>
      </Container>
 
    )
  }
}

export default PostPage