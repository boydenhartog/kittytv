import type { GetStaticPropsContext } from "next";
import Card from "@/components/Card";
import axios from "axios";
import ChatBox from "@/components/Chat/ChatBox";
import type { Cat } from "@/types";

export async function getStaticPaths() {
  const { data } = await axios.get(`http://localhost:3000/api/cats`);

  const paths = data.map((cat: Cat) => {
    return {
      params: {
        slug: cat.slug,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const { data } = await axios.get(
    `http://localhost:3000/api/cats/${params.slug}`
  );

  return {
    props: { cat: data },
    revalidate: 5000,
  };
}

export default function CatPage({ cat }: { cat: Cat }) {
  return (
    <>
      <div className="w-full flex">
        <Card classNames="w-3/5 mt-4" item={cat} />
        <div className="w-2/5 mt-4">
          <ChatBox />
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-4xl mt-8 font-bold">{cat.name}</h2>
      </div>

      <div className="mt-2 w-full flex">
        <span className="text-md w-3/5">
          Drink from the toilet kitty run to human with blood on mouth from
          frenzied attack on poor innocent mouse, dont i look cute? get scared
          by doggo also cucumerro . Experiences short bursts of poo-phoria after
          going to the loo. Cats are cute cat not kitten around . Taco cat
          backwards spells taco cat Gate keepers of hell. Purrrrrr lick left leg
          for ninety minutes, still dirty and pet me pet me pet me pet me, bite,
          scratch, why are you petting me for chase ball of string.
        </span>
      </div>
    </>
  );
}
