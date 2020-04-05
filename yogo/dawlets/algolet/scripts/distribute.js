const { execSync } = require("child_process")

const run = (cmd, cwd) => execSync(cmd, { encoding: "utf8", stdio: "inherit", cwd });
const setEnv = (name, value) => {
	if (value) {
		process.env[name.toUpperCase()] = value.toString();
	}
};
const getPlatform = () => {
	switch (process.platform) {
		case "darwin":
			return "mac";
		case "win32":
			return "windows";
		default:
			return "linux";
	}
};

const platform = getPlatform()
console.log(`creating distribution for ${platform}`)

if (platform === 'mac') {
  const CSC_LINK = process.env["mac_csc_link"]
  if(!CSC_LINK) throw new Error("CSC_LINK is not defined")
  setEnv("CSC_LINK", CSC_LINK);

  const CSC_LINK_PASSWORD = process.env["mac_csc_link_password"]
  if(!CSC_LINK_PASSWORD) throw new Error("CSC_LINK_PASSWORD is not defined")
  setEnv("CSC_KEY_PASSWORD", CSC_LINK_PASSWORD);

  run(
		`npx electron-builder --${platform}`,
		process.cwd(),
	);
}
if (platform === 'windows') {
  throw new Error('not supported yet') // TODO
}
if (platform === 'linux') {
  throw new Error('not supported yet') // TODO
}