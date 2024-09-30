# windowingsystem
Creating windows that can be moved and resized

It's an excercise from [exercism.org](https://exercism.org/profiles/sashasubbotina/solutions?order=newest_first).

The following image is representative of the values I am working with.

                  <--------------------- screenSize.width --------------------->

       ^          ╔════════════════════════════════════════════════════════════╗
       |          ║                                                            ║
       |          ║          position.x,_                                      ║
       |          ║          position.y  \                                     ║
       |          ║                       \<----- size.width ----->            ║
       |          ║                 ^      *──────────────────────┐            ║
       |          ║                 |      │        title         │            ║
       |          ║                 |      ├──────────────────────┤            ║
screenSize.height ║                 |      │                      │            ║
       |          ║            size.height │                      │            ║
       |          ║                 |      │       contents       │            ║
       |          ║                 |      │                      │            ║
       |          ║                 |      │                      │            ║
       |          ║                 v      └──────────────────────┘            ║
       |          ║                                                            ║
       |          ║                                                            ║
       v          ╚════════════════════════════════════════════════════════════╝


