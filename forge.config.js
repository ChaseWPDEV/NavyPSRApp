module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        certificateFile: process.env.certificate_pfx,
        certificatePassword: process.env.CERTPASSWORD
      },
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          maintainer: 'Chase Gruszewski',
          homepage: 'https://navyrecordreview.com'
        }
      },
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        background: './assets/dmg-background.png',
        format: 'ULFO'
      }
    }
  ],
};
