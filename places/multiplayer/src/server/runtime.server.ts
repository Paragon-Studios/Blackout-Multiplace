import { Flamework } from "@flamework/core";

Flamework.addPaths("places/lobby/src/server/controllers");
Flamework.addPaths("places/common/src/server/controllers");

Flamework.addPaths("places/lobby/src/server/components");
Flamework.addPaths("places/lobby/src/shared/components");
Flamework.addPaths("places/common/src/server/components");
Flamework.addPaths("places/common/src/shared/components");

Flamework.ignite();
