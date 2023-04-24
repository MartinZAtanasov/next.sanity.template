import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Section, SectionTitle } from "../Section";
import { SanityBlockContent } from "../../shared/SanityBlockContent";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { GridContainer } from "../../shared/GridContainer";
import { splitArray } from "../../../helpers/array";

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

      <GridContainer>
        <List dense>
          {list1.map((item) => (
            <ListItem key={item}>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>

        <List dense>
          {list2.map((item) => (
            <ListItem key={item}>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </GridContainer>
    </Section>
  );
};
