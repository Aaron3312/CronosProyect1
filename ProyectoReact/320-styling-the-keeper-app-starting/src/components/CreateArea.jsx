import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

function CreateArea(props) {
	const [note, setNote] = useState({
		title: "",
		content: "",
	});

  const [isExpanded, setExpanded] = useState(false);

	function handleChange(event) {
		const { name, value } = event.target;

		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			};
		});
	}

	function submitNote(event) {
		props.onAdd(note);
		setNote({
			title: "",
			content: "",
		});
		event.preventDefault();
	}

	return (
		<div>
			<form className="create-note">
        {isExpanded && (
          				<input
                  name="title"
                  onChange={handleChange}
                  value={note.title}
                  placeholder="Title"
                />
              )}

				<textarea
					name="content"
          onClick={() => { setExpanded(true);  }}

					onChange={handleChange}
					value={note.content}
					placeholder="Take a note..."
					rows={isExpanded ? 3 : 1}
				/>
        <Zoom in={isExpanded}>
          <Fab color="primary" onClick={submitNote} aria-label="add">
            <AddIcon />
          </Fab>
        </Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
