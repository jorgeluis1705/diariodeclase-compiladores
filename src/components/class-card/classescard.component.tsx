import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Modal,
} from "@mui/material";
import { FC, Fragment, useState } from "react";
import { Classes } from "../../models/clases";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export const ClassescarComponent: FC<{ item: Classes }> = ({
  item,
}): JSX.Element => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Fragment>
      <Grid onClick={handleOpen} item xs={4}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={item.image}
              alt="Imagen relacionada"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Clase {item.id} {new Date(item.date).toDateString()}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {item.content.slice(0, 80) + " ..."}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image={item.image}
                alt="Imagen relacionada"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Clase {item.id} {new Date(item.date).toDateString()}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {item.content}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Modal>
    </Fragment>
  );
};
