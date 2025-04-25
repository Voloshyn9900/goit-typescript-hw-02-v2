import React, { useState } from "react";
import { Header, Form, Button, Span, Input } from "./Searchbar.styled";

type SearchbarProps = {
  onSubmit: (query: string) => void;
};

export const Searchbar: React.FC<SearchbarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query.trim() === "") return;
    onSubmit(query);
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <Span>Поиск</Span>
        </Button>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Искать изображения и фотографии"
          onChange={handleChange}
          value={query}
        />
      </Form>
    </Header>
  );
};
