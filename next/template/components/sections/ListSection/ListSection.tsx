import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Section, SectionTitle } from "../Section";
import { SanityBlockContent } from "../../shared/SanityBlockContent";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { GridContainer } from "../../shared/GridContainer";
import { splitArray } from "../../../helpers/array";
import { mediaBreakPoint } from "../../../theme";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { LAYOUT } from "../../../theme/constants";

export interface ListSectionProps {
  title: string;
  subtitle?: string;
  bodyRaw: any;
  list: string[];
  __typename: string;
}

export const ListSection = (props: ListSectionProps) => {
  const { title, subtitle, bodyRaw, list } = props;

  const [list1, list2] = splitArray(list);

  return (
    <Section>
      <SectionTitle {...{ title, subtitle, center: true }} />
      <Box textAlign="center">
        <SanityBlockContent {...{ bodyRaw, altBase: "" }} />
      </Box>

      <GridContainer
        sx={{
          mt: LAYOUT.SPACING_M,
          [mediaBreakPoint]: {
            gridTemplateColumns: "1fr",
            rowGap: 0,
          },
        }}
      >
        <List dense>
          {list1.map((item) => (
            <ListItem key={item}>
              <ListItemIcon>
                <CheckCircleOutlineIcon color="primary" fontSize="large" />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>

        <List dense>
          {list2.map((item) => (
            <ListItem key={item}>
              <ListItemIcon>
                <CheckCircleOutlineIcon color="primary" fontSize="large" />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </GridContainer>
    </Section>
  );
};
