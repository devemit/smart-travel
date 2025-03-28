import {
   Compass,
   Mountain,
   Utensils,
   Waves,
   Trees,
   Building2,
   Users,
   Plane,
   LucideIcon,
} from 'lucide-react';

export interface Category {
   id: string;
   name: string;
   icon: LucideIcon;
}

export const categories: Category[] = [
   { id: 'all', name: 'All', icon: Compass },
   { id: 'adventure', name: 'Adventure', icon: Mountain },
   { id: 'culinary', name: 'Culinary', icon: Utensils },
   { id: 'beach', name: 'Beaches', icon: Waves },
   { id: 'nature', name: 'Nature', icon: Trees },
   { id: 'city', name: 'City Life', icon: Building2 },
   { id: 'family', name: 'Family', icon: Users },
   { id: 'luxury', name: 'Luxury', icon: Plane },
];
