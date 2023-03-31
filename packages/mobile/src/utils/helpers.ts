interface GenerateTestID {
  accessibilityLabel: string;
  testID: string;
}

export const generateTestId = (id: string): GenerateTestID => {
  return {
    accessibilityLabel: id,
    testID: id,
  };
};
