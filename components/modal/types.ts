import { FontAwesome } from '@expo/vector-icons';

export interface ModalAction {
  title: string;
  icon: keyof typeof FontAwesome.glyphMap;
  action: any;
}
