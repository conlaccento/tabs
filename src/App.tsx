import React from "react";
import Tabs from "./components/Tabs";

const App: React.FC = () => {
  const tabData = [
    {
      id: "tab-lorem",
      label: "Lorem Ipsum",
      badgeLabel: "Warning",
      badgeVariant: "negative",
      content: (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          laudantium a voluptatibus error id officiis voluptate cum quibusdam
          sunt inventore, totam eaque odit cupiditate velit consequuntur, nulla
          fuga dicta! Cumque?
        </p>
      ),
    },
    {
      id: "tab-delorean",
      label: "DeLorean Ipsum",
      badgeLabel: "Great Scott",
      badgeVariant: "positive",
      content: (
        <p>
          whoa, whoa Doc, stuck here, I can't be stuck here, I got a life in
          1985. I got a girl. I will. Right, George. Well, good luck you guys.
          Oh, one other thing, if you guys ever have kids and one of them when
          he's eight years old, accidentally sets fire to the living room rug,
          be easy on him. I said the keys are in here. Quiet, quiet. I'm gonna
          read your thoughts. Let's see now, you've come from a great distance?
        </p>
      ),
    },
    {
      id: "tab-office",
      label: "Office Ipsum",
      badgeLabel: "Something",
      badgeVariant: "neutral",
      content: (
        <p>
          Show pony let's not solutionize this right now parking lot it c-suite
          granularity, for on your plate high turnaround rate deliverables.
          Ladder up / ladder back to the strategy rock Star/Ninja. Draw a line
          in the sand i'm sorry i replied to your emails after only three weeks,
          but can the site go live tomorrow anyway?, or who's the goto on this
          job with the way forward .
        </p>
      ),
    },
    {
      id: "tab-cat",
      label: "Cat Ipsum",
      content: (
        <p>
          Cat ipsum dolor sit amet, excepteur so dicta but duis but incidunt.
          Dolor excepteur iure or magni vitae proident or autem. Exercitationem
          magni tempora ad. Ullamco dolor vel and esse vel. Quis ratione,
          cupidatat laborum but reprehenderit. Culpa pariatur ex, occaecat.
          Veritatis nemo exercitationem but eos. Ab modi for laudantium commodo.
        </p>
      ),
    },
    {
      id: "tab-cheese",
      label: "Cheese Ipsum",
      content: (
        <p>
          I love cheese, especially jarlsberg parmesan. Queso the big cheese say
          cheese fondue cheese and biscuits stinking bishop queso mozzarella.
          Stilton cut the cheese parmesan manchego danish fontina goat airedale
          parmesan. Who moved my cheese.
        </p>
      ),
    },
    {
      id: "tab-bro",
      label: "Bro Ipsum",
      content: (
        <p>
          Bro ipsum dolor sit amet hot dogging spread eagle jib manny.
          Caballerial dust on crust free ride, dust on crust pow pow park rat
          corduroy. Acro chain suck Skate grom apres stoked flow lid Whistler
          beater, park face plant grip tape taco huckfest. DH laps 180 schwag.
          Ollie granny gear twister, steeps stunt chillax McTwist caballerial
          hot dogging. Dirt twin tip presta trail swag, rock-ectomy air rigid
          crunchy laps travel afterbang brain bucket Whistler.
        </p>
      ),
    },
    {
      id: "tab-space",
      label: "Space Ipsum",
      content: (
        <p>
          I believe that space travel will one day become as common as airline
          travel is today. I’m convinced, however, that the true future of space
          travel does not lie with government agencies — NASA is still obsessed
          with the idea that the primary purpose of the space program is science
          — but real progress will come from private companies competing to
          provide the ultimate adventure ride, and NASA will receive the
          trickle-down benefits.
        </p>
      ),
    },
    {
      id: "tab-bacon",
      label: "Bacon Ipsum",
      content: (
        <p>
          Bacon ipsum dolor amet incididunt laboris sint culpa. Non esse ball
          tip, capicola minim nulla fugiat buffalo tempor sirloin occaecat quis.
          Cow ad pork belly eu. Chislic commodo ball tip meatloaf shankle et do
          swine, tongue lorem id adipisicing nostrud incididunt pig. Rump
          sausage voluptate, buffalo adipisicing proident anim ullamco tongue in
          eiusmod consequat irure pork. Eiusmod aliqua incididunt turducken,
          short loin aliquip veniam occaecat in turkey consectetur. Pariatur
          pork chop quis sunt commodo leberkas ham hock.
        </p>
      ),
    },
    {
      id: "tab-veggie",
      label: "Veggie Ipsum",
      content: (
        <p>
          Artichoke arugula aubergine bitterleaf black-eyed brussels caulie
          celtuce coriander cress garbanzo garlic grape j. Arugula bamboo bean
          bell bologi bona bush chickpea chickweed chicory corn courgette daikon
          garlic gourd green greens. Asparagus aubergine avocado azuki bona
          bunya bush carrot choy corn daikon earthnut esse fava fennel garbanzo
          green greens gumbo.
        </p>
      ),
    },
  ];

  return (
    <div>
      <Tabs title="Ipsums" titleId="ipsum-tabs" tabs={tabData} variant="underline"/>
    </div>
  );
};

export default App;
