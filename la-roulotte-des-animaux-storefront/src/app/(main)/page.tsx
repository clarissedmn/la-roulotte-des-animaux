import Hero from "@modules/home/components/hero"
import Card from "@modules/home/components/card"
import Presentation from "@modules/home/components/presentation"
import { Metadata } from "next"
import { fetchData } from "../../create-client-contentful"
import type { Document } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import type {ReactNode} from "react";

export const metadata: Metadata = {
  title: "La Roulotte des Animaux",
  description:
    "La Roulotte des Animaux est une mini-ferme itinérante basée à Coësmes (35) qui a pour vocation de faire découvrir ou redécouvrir la vie paysanne et le bien-être animal au plus grand nombre d’entre nous. ",
    icons: 'images/logo.svg',
}

type HeroContent = {
        sys: {
            type: 'Array';
        };
        total: number;
        skip: number;
        limit: number;
        items: {
            metadata: Record<string, unknown>;
            sys: Record<string, unknown>;
            fields: {
                description: Document;
                title: string;
                image: {
                    fields: {
                        title: string;
                        file: {
                            url: string;
                        }
                    }
                }
            };
        }[];
        includes: {
            Asset: Record<string, unknown>[][];
        };
};

type PresentationContent = {
    sys: {
        type: 'Array';
    };
    total: number;
    skip: number;
    limit: number;
    items: {
        metadata: Record<string, unknown>;
        sys: Record<string, unknown>;
        fields: {
            presentationDescription: Document;
            presentationTitle: string;
            presentationImage: {
                fields: {
                    title: string;
                    file: {
                        url: string;
                    }
                }
            }
        };
    }[];
    includes: {
        Asset: Record<string, unknown>[][];
    };
};

type CardContent = {
    sys: {
        type: 'Array';
    };
    total: number;
    skip: number;
    limit: number;
    items: {
        metadata: Record<string, unknown>;
        sys: Record<string, unknown>;
        fields: {
            cardTitle: string;
            descriptionCard: string;
            imageCard: {
                fields: {
                    title: string;
                    file: {
                        url:string;
                    }
                }
            }
        };
    }[];
    includes: {
        Asset: Record<string, unknown>[][];
    };
};

export type HeroContentProps = {
    items: {
        title: string;
        description: ReactNode;
        image: {
            fields: {
                title: string;
                file: {
                    url:string;
                }
            }
        };
    }[];
};

export type PresentationContentProps = {
    items: {
        title: string;
        description: ReactNode;
        image: {
            fields: {
                title: string;
                file: {
                    url:string;
                }
            }
        };
    }[];
};

export type CardContentProps = {
    items: {
        cardTitle: string;
        descriptionCard: string;
        imageCard: {
           url: string;
        }
    }[]
};


export default async function Home() {
  const heroContent: HeroContent = await fetchData({model: "home"})
  const presentationContent: PresentationContent = await fetchData({model: "presentation"})
  const cardContent: CardContent = await fetchData({model: "card"})
  const formattedHeroContent: HeroContentProps = {items: heroContent.items.map((item) => ({
    title: item.fields.title,
    description: documentToReactComponents(item.fields.description),
    image: item.fields.image,
  }))}
  const cardPresentationContent: CardContentProps = {items: cardContent.items.map((item) => ({
      cardTitle: item.fields.cardTitle,
      descriptionCard: item.fields.descriptionCard,
      imageCard: {
          url : item.fields.imageCard.fields.file.url,
      },
  }))}
  const formattedPresentationContent: HeroContentProps = {items: presentationContent.items.map((item) => ({
            title: item.fields.presentationTitle,
            description: documentToReactComponents(item.fields.presentationDescription),
            image: item.fields.presentationImage,
        }))}

  return (
    <>
      <Hero items={formattedHeroContent}/>
      <Presentation items={formattedPresentationContent}/>
      <div className="p-8 xl:px-36">
        <h2 className="font-baguet text-3xl text-center p-6">Participez à nos ateliers !</h2>
          <div className="flex flex-wrap gap-10 justify-around">
          {cardPresentationContent.items.map((card, index) => (
              <Card key={index} title={card.cardTitle} description={card.descriptionCard} image={card.imageCard} />
          ))}
          </div>
      </div>
    </>
  )
}
