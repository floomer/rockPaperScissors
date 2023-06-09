function renderLoginScreen() {
    const app = document.querySelector(".app");
    app.textContent = "";
    app.style.filter = "none";

    const loginForm = document.createElement("form");
    loginForm.className = "loginForm";
    app.appendChild(loginForm);
    window.application.renderBlock("loginBlock", loginForm);
}

function renderLobbyScreen() {
    const app = document.querySelector(".app");
    const blur = document.querySelector(".loadingText");
    if (document.body.firstElementChild === blur) {
        document.body.firstElementChild.remove();
    }
    app.textContent = "";
    app.style.filter = "none";

    const lobbyForm = document.createElement("form");
    const playersBlock = document.createElement("div");
    const startGameBlock = document.createElement("div");
    lobbyForm.className = "lobbyForm";
    playersBlock.className = "playersBlock";
    startGameBlock.className = "lobbyForm__buttonBlock";

    app.appendChild(lobbyForm);
    lobbyForm.appendChild(playersBlock);
    lobbyForm.appendChild(startGameBlock);

    window.application.renderBlock("lobbyBlock", playersBlock);
    window.application.renderBlock("playButtonBlock", startGameBlock);
}

function renderWaitingScreen() {
    const app = document.querySelector(".app");
    const blur = document.querySelector(".loadingText");
    if (document.body.firstElementChild === blur) {
        document.body.firstElementChild.remove();
    }
    app.textContent = "";
    app.style.filter = "none";

    const waitingBlock = document.createElement("div");
    waitingBlock.className = "waitingBlock";
    app.appendChild(waitingBlock);

    window.application.renderBlock("waitingBlock", waitingBlock);
}

function renderGameMoveScreen() {
    const app = document.querySelector(".app");
    const blur = document.querySelector(".loadingText");
    if (document.body.firstElementChild === blur) {
        document.body.firstElementChild.remove();
    }
    app.textContent = "";
    app.style.filter = "none";

    const moveForm = document.createElement("form");
    const moveBlock = document.createElement("div");

    moveForm.className = "moveForm";
    moveBlock.className = "moveBlock";

    app.appendChild(moveForm);
    moveForm.appendChild(moveBlock);

    window.application.renderBlock("gameMoveBlock", moveForm);
}

function renderWaitingEnemyMoveScreen() {
    const app = document.querySelector(".app");
    const blur = document.querySelector(".loadingText");
    if (document.body.firstElementChild === blur) {
        document.body.firstElementChild.remove();
    }
    app.textContent = "";
    app.style.filter = "none";

    const waitingEnemyBlock = document.createElement("div");
    waitingEnemyBlock.className = "waitingEnemyBlock";

    app.appendChild(waitingEnemyBlock);

    window.application.renderBlock("waitingEnemyMoveBlock", waitingEnemyBlock);
}

function renderWinScreen() {
    const app = document.querySelector(".app");
    const blur = document.querySelector(".loadingText");
    if (document.body.firstElementChild === blur) {
        document.body.firstElementChild.remove();
    }
    app.textContent = "";
    app.style.filter = "none";

    const winBlock = document.createElement("div");
    winBlock.className = "winBlock";

    app.appendChild(winBlock);

    window.application.renderBlock("winBlock", winBlock);
}

function renderLoseScreen() {
    const app = document.querySelector(".app");
    const blur = document.querySelector(".loadingText");
    if (document.body.firstElementChild === blur) {
        document.body.firstElementChild.remove();
    }
    app.textContent = "";
    app.style.filter = "none";

    const loseBlock = document.createElement("div");
    loseBlock.className = "loseBlock";

    app.appendChild(loseBlock);

    window.application.renderBlock("loseBlock", loseBlock);
}

function renderBlurScreen() {
    const app = document.querySelector(".app");
    const loadingText = document.createElement("h1");

    loadingText.className = "loadingText";
    loadingText.textContent = "Loading...";

    app.before(loadingText);
    if (window.application.isLoading) {
        app.style.filter = "blur(2px)";
        loadingText.style.display = "block";
    }
}

window.application.screens["loginScreen"] = renderLoginScreen;
window.application.screens["lobbyScreen"] = renderLobbyScreen;
window.application.screens["waitingScreen"] = renderWaitingScreen;
window.application.screens["gameMoveScreen"] = renderGameMoveScreen;
window.application.screens["waitingEnemyMoveScreen"] = renderWaitingEnemyMoveScreen;
window.application.screens["winScreen"] = renderWinScreen;
window.application.screens["loseScreen"] = renderLoseScreen;
window.application.screens["blurScreen"] = renderBlurScreen;