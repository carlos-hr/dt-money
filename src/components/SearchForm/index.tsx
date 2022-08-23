import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styled";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useFetchTransactions } from "../../hooks/useFetchTransactions";

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

  const fetchTransactions = useFetchTransactions();

  async function onSearchTransactions(data: SearchFormInput) {
    await fetchTransactions(data.query);
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
