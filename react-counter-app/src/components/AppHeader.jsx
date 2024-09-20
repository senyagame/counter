import { Button, Container, Stack } from 'react-bootstrap';
import { useTheme } from '../hooks';

export default function () {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <Container>
        <Stack direction="horizontal">
          <h1 className="">Counter on React</h1>

          <Button
            className="ms-auto"
            variant={theme === 'light' ? 'dark' : 'light'}
            onClick={toggleTheme}
          >
            {theme}
          </Button>
        </Stack>
      </Container>
    </>
  );
}
