const { notarize } = require('electron-notarize');
const appBundleId = 'com.electron.algolet-beta'

const appleId = process.env['APPLEID']
const appleIdPassword = process.env['APPLEID_PASSWORD']
exports.default = async function notarizing(context) {
  const { electronPlatformName, appOutDir } = context;
  if(!appleId) throw new Error('appleId is not set in the env')
  if(!appleIdPassword) throw new Error('appleIdPassword is not set in the env')
  if (electronPlatformName !== 'darwin') {
    throw new Error(`Notarization failed. Expected platform is 'darwin' but you are on ${electronPlatformName}`)
  }

  const appName = context.packager.appInfo.productFilename;
  const appPath = `${appOutDir}/${appName}.app`

  console.log(`Notarizing ${appBundleId} found at ${appPath}`);

  return await notarize({
    appBundleId,
    appPath,
    appleId,
    appleIdPassword
  });
};