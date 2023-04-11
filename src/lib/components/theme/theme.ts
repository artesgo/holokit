export interface ITheme {
  color?: string,
  colorAlt?: string,
  backgroundColor?: string,
  backgroundColorAlt?: string,
  backgroundColorModal?: string,
  fontSizeS?: string,
  fontSizeM?: string,
  fontSizeL?: string,
  fontWeightS?: string,
  fontWeightM?: string,
  fontWeightL?: string,
  paddingHS?: string;
  paddingHM?: string;
  paddingHL?: string;
  paddingVS?: string;
  paddingVM?: string;
  paddingVL?: string;
  marginHS?: string;
  marginHM?: string;
  marginHL?: string;
  marginVS?: string;
  marginVM?: string;
  marginVL?: string;
  border?: string;
  borderRadius?: string;
  borderColor?: string;
  borderWidthM?: string;
  borderWidthL?: string;
  controlWidth?: string;
  controlMinWidth?: string;
  controlMaxWidth?: string;
  controlBorder?: string;
  controlBorderRadius?: string;
  controlBorderColor?: string;
  outlineColor?: string;
  outlineOffset?: string;
  transition?: string;

	success?: string;
	successLightest?: string;
	successLighter?: string;
	successDarker?: string;
	successDarkest?: string;

	info?: string;
	infoLightest?: string;
	infoLighter?: string;
	infoDarker?: string;
	infoDarkest?: string;

	danger?: string;
	dangerLightest?: string;
	dangerLighter?: string;
	dangerDarker?: string;
	dangerDarkest?: string;

	warning?: string;
	warningLightest?: string;
	warningLighter?: string;
	warningDarker?: string;
	warningDarkest?: string;

	neutral?: string;
	neutralLightest?: string;
	neutralLighter?: string;
	neutralDarker?: string;
	neutralDarkest?: string;
}