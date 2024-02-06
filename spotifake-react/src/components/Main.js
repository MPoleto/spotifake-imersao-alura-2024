import '../styles/components/_Main.scss';
import { Header } from "./Header";
import { Playlist } from "./Playlist";
import { SearchTermContextProvider } from './SearchTermContext';


export function Main() {
  return (
    <main className="main__container">
      <SearchTermContextProvider>
        <Header />
        <Playlist />
      </SearchTermContextProvider>
    </main>
  );
}