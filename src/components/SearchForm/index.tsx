import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styled";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const searchFormSchema = zod.object({
  query: zod.string(),
});

type SearchFormInput = zod.infer<typeof searchFormSchema>;

const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function onSearchTransactions(data: SearchFormInput) {
    await new Promise((res) => setTimeout(res, 2000));
    console.log(data);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(onSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
};

export default SearchForm;
