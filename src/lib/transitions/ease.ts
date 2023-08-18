export interface Ease {
  ease?: string;
  duration?: number;
}

export interface Vec2Ease extends Ease {
  x?: string | number;
  y?: string | number;
}

export interface BlurEase extends Ease {
  blur?: string | number;
}