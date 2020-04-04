const { execSync } = require("child_process")

const run = (cmd, cwd) => execSync(cmd, { encoding: "utf8", stdio: "inherit", cwd });
const setEnv = (name, value) => {
	if (value) {
		process.env[name.toUpperCase()] = value.toString();
	}
};
const getEnv = name => process.env[name.toUpperCase()] || null;
const getInput = (name, required) => {
	const value = getEnv(name);
	if (required && !value) {
		throw new Error(`"${name}" input variable is not defined`);
	}
	return value;
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
  setEnv("CSC_LINK", getInput("mac_csc_link", true));
  setEnv("CSC_KEY_PASSWORD", getInput("mac_csc_link_password", true));
  run(
		`npx electron-builder --${platform}`,
		// `CSC_LINK=${process.env.MAC_CSC_LINK} CSC_KEY_PASSWORD=${process.env.MAC_CSC_LINK_PASSWORD} npx electron-builder --${platform} --publish always`,
		process.cwd(),
	);
}
if (platform === 'windows') {
  throw new Error('not supported yet') // TODO
}
if (platform === 'linux') {
  throw new Error('not supported yet') // TODO
}