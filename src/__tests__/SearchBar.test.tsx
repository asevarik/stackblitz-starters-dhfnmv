// SearchBar.test.tsx

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import {SearchBar} from '../Components';

describe('SearchBar Component', () => {
  it('calls onChange with the input value when typing', async () => {
    // Arrange
    const mockOnChange = jest.fn();
    const { getByPlaceholderText } = render(<SearchBar onChange={mockOnChange} />);
    const inputElement = getByPlaceholderText('Type here');

    // Act
    fireEvent.change(inputElement, { target: { value: 'searchValue' } });

    // Assert
    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledWith('searchValue');
    });
  });
});
