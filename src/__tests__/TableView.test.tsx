// TableView.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import {TableView} from '../Components';
import { GithubSearchResultModel } from '../Models/GithubSearchResultModel';
import '@testing-library/jest-dom';

describe('TableView Component', () => {
  it('renders the table with search results', () => {
    // Arrange
    const searchResults: GithubSearchResultModel[] = [
      {
        searchTerm: 'react',
        results: [
          {
            id: 1,
            login: 'user1',
            avatar_url: 'avatar1.jpg',
            type: 'user',
            score: 100,
            url:""
          },
          {
            id: 2,
            login: 'user2',
            avatar_url: 'avatar2.jpg',
            type: 'user',
            score: 90,
            url:""
          },
        ],
      },
      {
        searchTerm: 'typescript',
        results: [
          {
            id: 3,
            login: 'user3',
            avatar_url: 'avatar3.jpg',
            type: 'user',
            score: 80,
            url:""
          },
        ],
      },
    ];

    // Act
    const { getByText } = render(<TableView searchResults={searchResults} />);

    // Assert
    expect(getByText('Search Term')).toBeInTheDocument();
    expect(getByText('Search Reults')).toBeInTheDocument();
    expect(getByText('react')).toBeInTheDocument();
    expect(getByText('user1')).toBeInTheDocument();
    expect(getByText('user2')).toBeInTheDocument();
    expect(getByText('typescript')).toBeInTheDocument();
    expect(getByText('user3')).toBeInTheDocument();
  });
});
