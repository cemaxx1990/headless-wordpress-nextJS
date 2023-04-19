import { Breakpoints } from '../constants';

export const SmallAndBelow = `(max-width: ${Breakpoints.Small - 1}px)`;
export const SmallAndAbove = `(min-width: ${Breakpoints.Small}px)`;
export const MediumAndAbove = `(min-width: ${Breakpoints.Medium}px)`;
export const LargeAndAbove = `(min-width: ${Breakpoints.Large}px)`;

export const MediaSmallAndBelow = `@media ${SmallAndBelow}`;
export const MediaSmallAndAbove = `@media ${SmallAndAbove}`;
export const MediaMediumAndAbove = `@media ${MediumAndAbove}`;
export const MediaLargeAndAbove = `@media ${LargeAndAbove}`;
export const MediaDesktop = `@media ${MediumAndAbove}`;
