import { songs } from "~/constants";
import { partition, shuffle } from ".";

const songsTransformed = songs.reduce((accumulator: any, song: any) => {
  accumulator[song.song] = { id: song.song, content: song.song };

  return accumulator;
}, {});

const [setOne, setTwo, setThree] = partition(
  shuffle(Object.keys(songsTransformed)),
  3
);

export const initialData = {
  tasks: { ...songsTransformed },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Set 1",
      taskIds: setOne,
    },
    "column-2": {
      id: "column-2",
      title: "Set 2",
      taskIds: setTwo,
    },
    "column-3": {
      id: "column-3",
      title: "Set 3",
      taskIds: setThree,
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3"],
};
