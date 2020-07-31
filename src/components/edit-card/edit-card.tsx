import React, { useEffect, useState } from "react";
import "./edit-card.scss";
import { useParams, Link, useHistory } from "react-router-dom";
import useInput from "../../hooks/use-input";

import { CardData } from "../../types/card";
import { useCardData } from "../../data-hooks/cards-hooks";

export interface editCardPage {
  cardId?: string;
}

const EditCard: React.SFC<editCardPage> = ({ cardId }) => {
  const history = useHistory();

  const [id, onIdChange, setId] = useInput(cardId);
  const [name, onNameChange, setName] = useInput("");
  const [description, onDescriptionChange, setDescription] = useInput("");

  const [error, setError] = useState("");

  const [fetchCard, saveCard] = useCardData();

  useEffect(() => {
    if (!cardId) {
      return;
    }
    fetchCard(cardId).then((card) => {
      if (card) {
        setId(card.id);
        setName(card.name);
        setDescription(card.description);
      }
    });
  }, []);

  const navigateToCards = () => {
    history.push("/cards");
  };

  const saveAction = () => {
    if (!id || !name) {
      setError("Both ID and name is required!");
      return;
    }

    saveCard(
      {
        id,
        name,
        description,
      },
      cardId
    )
      .then(() => {
        navigateToCards();
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="edit-card">
      <h3>{cardId ? "Edit card" : "Create card"}</h3>
      <div className="form">
        <div className="input-group">
          <label>Card ID *</label>
          <input name="id" type="text" value={id} onChange={onIdChange} disabled={!!cardId} />
        </div>
        <div className="input-group">
          <label>Card Name *</label>
          <input name="name" type="text" value={name} onChange={onNameChange} />
        </div>
        <div className="input-group">
          <label>Card Description</label>
          <textarea name="description" value={description} onChange={onDescriptionChange} />
        </div>
        {error && (
          <div className="error-messages">
            <p>{error}</p>
          </div>
        )}
      </div>
      <div className="action-bar">
        <span className="btn" onClick={navigateToCards}>
          Cancel
        </span>
        <span className="btn" onClick={saveAction}>
          Save
        </span>
      </div>
    </div>
  );
};

export default EditCard;
