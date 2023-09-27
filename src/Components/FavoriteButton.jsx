import { AiOutlinePlus ,AiOutlineCheck} from "react-icons/ai";
import React from "react";
import axios from "axios";
import { useMemo, useCallback } from "react";
import useCurrentUser from "../hooks/useCurrentUser";
import useFavorate from "../hooks/useFavorate"

function FavorateButton(props) {
  const { data: currentUser, mutate } = useCurrentUser();
  const { movieId } = props;
  const { mutate: mutateFavorites } = useFavorate();

  const isFavorate = useMemo(() => {
    const list = currentUser?.favoriteIds || [];
    return list.includes(props.movieId);
  }, [currentUser, props.movieId]);

  const toggleFavorate = useCallback(async () => {
    let response;
    if (isFavorate) {
      response = await axios.delete(
        `http://localhost:5000/api/favorate/${movieId}`,
        {
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
    } else {
      response = await axios.post(
        "http://localhost:5000/api/favorate",
        { movieId },
        {
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
    }
    
    const updatedFavoriteIds = response?.data?.favoriteIds;
    mutate({...currentUser,favoriteIds:updatedFavoriteIds})
    mutateFavorites()
  }, []);
  const Icon= isFavorate?AiOutlineCheck:AiOutlinePlus
  return (
    <Icon
      onClick={toggleFavorate}
      className="md:text-2xl text-white group-hover/item:text-neutral-300"
    />
  );
}

export default FavorateButton;
