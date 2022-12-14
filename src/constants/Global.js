const tailwindDefaultTheme = require ('tailwindcss/defaultTheme');

export const MediaQueryBreakpointEnum = {
  '2xl': `(min-width: ${tailwindDefaultTheme.screens['2xl']})`,
  lg: `(min-width: ${tailwindDefaultTheme.screens.lg})`,
  md: `(min-width: ${tailwindDefaultTheme.screens.md})`,
  sm: `(min-width: ${tailwindDefaultTheme.screens.sm})`,
  xl: `(min-width: ${tailwindDefaultTheme.screens.xl})`,
};

export const DrawerStateEnum = {
  EDIT: 'EDIT',
  ADD: 'ADD',
  PREVIEW: 'PREVIEW',
};

export const defaultGlobalConfirmDialogOptions = {
  confirmButtonText: 'Confirm',
  cancelButtonText: 'Cancel',
  confirmButtonProps: {
    color: 'inherit',
  },
  cancelButtonProps: {
    color: 'error',
    autoFocus: true,
  },
};

export const APP_SIDE_MENU_WIDTH = 270;
