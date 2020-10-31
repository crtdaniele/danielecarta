import * as token from './token';
import theme from 'styled-theming';
import { Collapse, FontSize, FontWeight, Margin, Padding } from './types';

const cssWeight = (props: FontWeight) => {
  if (props.weight === token.Weight100) {
    return `font-weight: ${token.Weight100};`;
  }
  if (props.weight === token.Weight400) {
    return `font-weight: ${token.Weight400};`;
  }
  if (props.weight === token.Weight500) {
    return `font-weight: ${token.Weight500};`;
  }
  if (props.weight === token.Weight700) {
    return `font-weight: ${token.Weight700};`;
  }
};

const cssFontSzie = (props: FontSize) => {
  if (props.fontSize === token.SizeFont08) {
    return `font-size: ${token.SizeFont08};`;
  }
  if (props.fontSize === token.SizeFont1) {
    return `font-size: ${token.SizeFont1};`;
  }
  if (props.fontSize === token.SizeFont2) {
    return `font-size: ${token.SizeFont2};`;
  }
  if (props.fontSize === token.SizeFont3) {
    return `font-size: ${token.SizeFont3};`;
  }
};

const cssCollapse = (props: Collapse) => {
  if (
    props.collapse === token.ResponsiveXs ||
    props.collapse === token.ResponsiveSm ||
    props.collapse === token.ResponsiveMd ||
    props.collapse === token.ResponsiveLg
  ) {
    return `flex-direction: column;`;
  }
};

const cssPadding = (props: Padding) => {
  let padding: string[] = [];

  if (props.padding === token.Padding0) {
    padding.push(`padding: ${token.Padding0};`);
  }
  if (props.padding === token.Padding5) {
    padding.push(`padding: ${token.Padding5};`);
  }
  if (props.padding === token.Padding10) {
    padding.push(`padding: ${token.Padding10};`);
  }
  if (props.padding === token.Padding15) {
    padding.push(`padding: ${token.Padding15};`);
  }
  if (props.paddingTop === token.Padding0) {
    padding.push(`padding-top: ${token.Padding0};`);
  }
  if (props.paddingTop === token.Padding5) {
    padding.push(`padding-top: ${token.Padding5};`);
  }
  if (props.paddingTop === token.Padding10) {
    padding.push(`padding-top: ${token.Padding10};`);
  }
  if (props.paddingTop === token.Padding15) {
    padding.push(`padding-top: ${token.Padding15};`);
  }
  if (props.paddingLeft === token.Padding0) {
    padding.push(`padding-left: ${token.Padding0};`);
  }
  if (props.paddingLeft === token.Padding5) {
    padding.push(`padding-left: ${token.Padding5};`);
  }
  if (props.paddingLeft === token.Padding10) {
    padding.push(`padding-left: ${token.Padding10};`);
  }
  if (props.paddingLeft === token.Padding15) {
    padding.push(`padding-left: ${token.Padding15};`);
  }
  if (props.paddingRight === token.Padding0) {
    padding.push(`padding-right: ${token.Padding0};`);
  }
  if (props.paddingRight === token.Padding5) {
    padding.push(`padding-right: ${token.Padding5};`);
  }
  if (props.paddingRight === token.Padding10) {
    padding.push(`padding-right: ${token.Padding10};`);
  }
  if (props.paddingRight === token.Padding15) {
    padding.push(`padding-right: ${token.Padding15};`);
  }
  if (props.paddingBottom === token.Padding0) {
    padding.push(`padding-bottom: ${token.Padding0};`);
  }
  if (props.paddingBottom === token.Padding5) {
    padding.push(`padding-bottom: ${token.Padding5};`);
  }
  if (props.paddingBottom === token.Padding10) {
    padding.push(`padding-bottom: ${token.Padding10};`);
  }
  if (props.paddingBottom === token.Padding15) {
    padding.push(`padding-bottom: ${token.Padding15};`);
  }

  return padding.join('');
};

const cssMargin = (props: Margin) => {
  let margin: string[] = [];

  if (props.margin === token.Margin0) {
    margin.push(`margin: ${token.Margin0};`);
  }
  if (props.margin === token.Margin5) {
    margin.push(`margin: ${token.Margin5};`);
  }
  if (props.margin === token.Margin10) {
    margin.push(`margin: ${token.Margin10};`);
  }
  if (props.margin === token.Margin15) {
    margin.push(`margin: ${token.Margin15};`);
  }
  if (props.marginTop === token.Margin0) {
    margin.push(`margin-top: ${token.Margin0};`);
  }
  if (props.marginTop === token.Margin5) {
    margin.push(`margin-top: ${token.Margin5};`);
  }
  if (props.marginTop === token.Margin10) {
    margin.push(`margin-top: ${token.Margin10};`);
  }
  if (props.marginTop === token.Margin15) {
    margin.push(`margin-top: ${token.Margin15};`);
  }
  if (props.marginLeft === token.Margin0) {
    margin.push(`margin-left: ${token.Margin0};`);
  }
  if (props.marginLeft === token.Margin5) {
    margin.push(`margin-left: ${token.Margin5};`);
  }
  if (props.marginLeft === token.Margin10) {
    margin.push(`margin-left: ${token.Margin10};`);
  }
  if (props.marginLeft === token.Margin15) {
    margin.push(`margin-left: ${token.Margin15};`);
  }
  if (props.marginRight === token.Margin0) {
    margin.push(`margin-right: ${token.Margin0};`);
  }
  if (props.marginRight === token.Margin5) {
    margin.push(`margin-right: ${token.Margin5};`);
  }
  if (props.marginRight === token.Margin10) {
    margin.push(`margin-right: ${token.Margin10};`);
  }
  if (props.marginRight === token.Margin15) {
    margin.push(`margin-right: ${token.Margin15};`);
  }
  if (props.marginBottom === token.Margin0) {
    margin.push(`margin-bottom: ${token.Margin0};`);
  }
  if (props.marginBottom === token.Margin5) {
    margin.push(`margin-bottom: ${token.Margin5};`);
  }
  if (props.marginBottom === token.Margin10) {
    margin.push(`margin-bottom: ${token.Margin10};`);
  }
  if (props.marginBottom === token.Margin15) {
    margin.push(`margin-bottom: ${token.Margin15};`);
  }

  return margin.join('');
};

export {
  token,
  theme,
  cssWeight,
  cssFontSzie,
  cssCollapse,
  cssMargin,
  cssPadding,
};
