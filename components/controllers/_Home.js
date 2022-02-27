import GenreList from "@sidebars/GenreList";
import AnimeSeason from "@feeds/AnimeSeason";
import AnimeOngoing from "@feeds/AnimeOngoing";
import AnimeMovie from "@feeds/AnimeMovie";
import Container from "@sections/Container";

export default function _Home() {
  return (
    <Container
      main={<AnimeSeason />}
      main2={<AnimeOngoing />}
      main3={<AnimeMovie />}
      aside={<GenreList />}
    />
  );
}
