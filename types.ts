export interface TagProps {
  tag?: string;
  description?: string;
  position?: string;
}

export interface Cat {
  id: number;
  slug: string;
  name: string;
  description: string;
  online: boolean;
  category: string;
  image: string;
}
