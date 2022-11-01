export interface ISize {
  width: number | undefined;
  height: number | undefined;
}

export interface IValidations {
  isEmpty?: boolean;
  minLength?: number;
  maxLength?: number;
  onlySymbol?: boolean;
  filter?: boolean;
  isZipCode?: boolean;
  isEmail?: boolean;
}
