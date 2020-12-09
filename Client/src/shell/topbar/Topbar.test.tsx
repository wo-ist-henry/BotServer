import React from 'react';
import {render, RenderOptions, screen} from '@testing-library/react';
import Topbar from "./topbar";
import {act} from "react-dom/test-utils";

describe('toolbar tests', () => {
  it('renders Who ist Henry in the title', () => {
    act(() => {
      render(<Topbar />);
    });

    const appNameElements = screen.getAllByTestId('appName');

    expect(appNameElements).toHaveLength(1);

    const appNameElement = appNameElements[0];

    expect(appNameElement).toBeInTheDocument();
    expect(appNameElement).toHaveTextContent('Wo ist Henry?');
  });
});
