export default `
  button {
    font: inherit;
    background-color: transparent;
    border: none;
    outline: 3px solid transparent;
    transition: var(--transition-standard);

    &:focus,
    &:active {
      outline: 3px solid var(--color-highlight-alt);
    }
  }
`;
