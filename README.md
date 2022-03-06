# Terrasoft-Redirect: Redirect Terrasoft RU to UA domain.

![Logo](images/logo-128.png)

On the 24th of February has been started russian invasion in Ukraine. At the same time, Terrasoft is completely withdrawing from the markets of russia and belarus - permanently ceasing to work with customers and partners in these regions. #stopwar, #stoprussia

So, domain `terrasoft.ru` currently is not working. The alternative is `terrasoft.ua` with mainly same content. 


## User setup

1. Download [latest release](https://github.com/heabijay/terrasoft-redirect/releases/latest).
2. Unzip archive.
3. Navigate chrome to `chrome://extensions`.
4. Check the `Developer mode` toggle.
5. Click on `Load Unpacked Extension...`
6. Select the `terrasoft-redirect-dist` directory.


## Dev setup

1. Install dependencies

    ```
    npm install
    ```

2. Build the front-end

    ```
    npm run build
    ```

3. Navigate chrome to `chrome://extensions`.
4. Check the `Developer mode` toggle.
5. Click on `Load Unpacked Extension...`
6. Select the `dist` directory.

Remember to re-run `npm run build` after making changes!


## Credits

This project is powered by [Chrometana](https://github.com/TheoBr/Chrometana) codebase.
