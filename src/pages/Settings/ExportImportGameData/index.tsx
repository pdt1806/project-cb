import { Button, FileButton, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { exportAllGame, importAllGame } from "../../../GameProvider/GameActions";
import { DiscordStore } from "../../../GameProvider/Stores/DiscordStore";

const ExportImportGameData = () => {
  const discordSdk = DiscordStore((state) => state.discordSdk);

  return (
    <Stack>
      <Title order={2} fw={500}>
        Export/Import game data
      </Title>
      <Text c="dimmed">
        Export your game data to a JSON file, or import it from a file to restore your progress. Importing will
        overwrite your current game data.
      </Text>
      <SimpleGrid cols={2}>
        <Button
          size="lg"
          color="cbc-green"
          radius="xl"
          onClick={() => {
            exportAllGame(discordSdk ?? undefined);
          }}
        >
          Export
        </Button>
        <FileButton
          onChange={(file) => {
            if (file) importAllGame(file);
          }}
          name="Import"
          accept=".json"
        >
          {(props) => (
            <Button {...props} component="label" size="lg" color="cbc-teal" radius="xl" className="cursor-pointer">
              Import
            </Button>
          )}
        </FileButton>
      </SimpleGrid>
    </Stack>
  );
};

export default ExportImportGameData;
