// valid and false need to be removed/refactored after API implementation

import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/button';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Box, Heading, Text } from '@chakra-ui/layout';
import { useColorModeSwitcher } from '../../utils/hooks/useColorModeSwitcher';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import VisuallyHidden from '@chakra-ui/visually-hidden';
import { useRef, useState } from 'react';
import { ErrorMessage, SuccessMessage } from '../styled';

const Subscribe = ({ valid, invalid, loading, ...props }) => {
  const { themed, colorGrey, errorColor } = useColorModeSwitcher();
  const [form, setForm] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setForm({ state: 'loading' });

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputRef.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: 'error',
        message: error
      });
      inputRef.current.value = '';
      return;
    }

    inputRef.current.value = '';
    setForm({
      state: 'success',
      message: `Congrats! You're on the mailing list.`
    });
  };

  return (
    <Box
      border="2px solid"
      borderColor={colorGrey}
      py="2rem"
      px="3rem"
      maxW="45rem"
    >
      <Heading variant="h3">Subscribe to my newsletter</Heading>
      <Text mb="1rem">
        Coming soon ...{' '}
      </Text>
      <form onSubmit={handleSubmit}>
        <FormControl id="email">
          <FormLabel>
            <VisuallyHidden>Enter your email</VisuallyHidden>
          </FormLabel>
          <InputGroup mb="1rem" borderColor={themed}>
            <Input
              {...props}
              ref={inputRef}
              errorBorderColor={errorColor}
              isRequired
              type="email"
              autoComplete="email"
              borderRadius="sm"
              placeholder="jimmy@choo.com"
            />
            <InputRightElement minW="8rem">
              {form.state === 'loading' || (loading && true) ? (
                <Button
                  w="100%"
                  isLoading
                  variant="secondaryThemed"
                  _hover={{ variant: 'secondaryThemed' }}
                />
              ) : (
                <Button w="100%" variant="secondaryThemed" type="submit">
                  Subscribe
                </Button>
              )}
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </form>
      {form.state === 'success' && (
        <SuccessMessage>
          {form.message || `Congrats! You're on the mailing list.`}
        </SuccessMessage>
      )}
      {form.state === 'error' && (
        <ErrorMessage>
          {form.message || `You've already subscribed!`}
        </ErrorMessage>
      )}
      {valid && (
        <SuccessMessage>Congrats! You're on the mailing list.</SuccessMessage>
      )}
      {invalid && <ErrorMessage>You've already subscribed!</ErrorMessage>}
    </Box>
  );
};

Subscribe.propTypes = {
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  loading: PropTypes.bool
};

Subscribe.defaultProps = {
  valid: false,
  invalid: false,
  loading: false
};

export default Subscribe;
