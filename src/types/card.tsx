export interface CardProps {
  id: number;
  title: string;
  description?: string;

  image: string;             // backend "image"
  slug: string;              // backend "slug"

  author_id: number;
  author_name: string;
  author_profile: string | null;

  created_at: string;        // ISO string
  is_featured?: boolean;
}
