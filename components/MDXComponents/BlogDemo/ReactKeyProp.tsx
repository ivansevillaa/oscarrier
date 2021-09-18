import {useState} from "react";
import useTranslation from "next-translate/useTranslation";
import {
  Box,
  Button,
  Input,
  ListItem,
  Text,
  UnorderedList
} from "@chakra-ui/react";

function IndexKeyToTheEnd(): JSX.Element {
  const [counter, setCounter] = useState(1);
  const [list, setList] = useState([{id: counter}]);
  const {t} = useTranslation("post-demo");

  const addToEnd = () => {
    setCounter(counter + 1);
    const newList = [...list, {id: counter + 1}];
    setList(newList);
  };

  const remove = () => {
    setCounter(1);
    setList([{id: 1}]);
  };

  return (
    <Box d="flex" flexDir="column" alignItems="center">
      <Box as="span">
        <Button mr="2" onClick={addToEnd}>
          {t("toEndBtn")}
        </Button>
        <Button onClick={remove} disabled={list.length === 1}>
          {t("removeAll")}
        </Button>
      </Box>
      <UnorderedList>
        {list.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ListItem alignItems="center" d="flex" my="5" key={index}>
            <Text mr="2">{item.id}</Text>
            <Input maxW="500" />
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}

function IndexKeyToStart(): JSX.Element {
  const [counter, setCounter] = useState(1);
  const [list, setList] = useState([{id: counter}]);
  const {t} = useTranslation("post-demo");

  const addToStart = () => {
    setCounter(counter + 1);
    const newList = [{id: counter + 1}, ...list];
    setList(newList);
  };

  const remove = () => {
    setCounter(1);
    setList([{id: 1}]);
  };

  return (
    <Box d="flex" flexDir="column" alignItems="center">
      <Box as="span">
        <Button mr="2" onClick={addToStart}>
          {t("toStartBtn")}
        </Button>
        <Button onClick={remove} disabled={list.length === 1}>
          {t("removeAll")}
        </Button>
      </Box>
      <UnorderedList>
        {list.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ListItem alignItems="center" d="flex" my="5" key={index}>
            <Text mr="2">{item.id}</Text>
            <Input maxW="500" />
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}

function IDKeyToStart(): JSX.Element {
  const [counter, setCounter] = useState(1);
  const [list, setList] = useState([{id: counter}]);
  const {t} = useTranslation("post-demo");

  const addToStart = () => {
    setCounter(counter + 1);
    const newList = [{id: counter + 1}, ...list];
    setList(newList);
  };

  const remove = () => {
    setCounter(1);
    setList([{id: 1}]);
  };

  return (
    <Box d="flex" flexDir="column" alignItems="center">
      <Box as="span">
        <Button mr="2" onClick={addToStart}>
          {t("toStartBtn")}
        </Button>
        <Button onClick={remove} disabled={list.length === 1}>
          {t("removeAll")}
        </Button>
      </Box>
      <UnorderedList>
        {list.map(item => (
          <ListItem alignItems="center" d="flex" my="5" key={item.id}>
            <Text mr="2">{item.id}</Text>
            <Input maxW="500" />
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}

export {IndexKeyToTheEnd, IndexKeyToStart, IDKeyToStart};
