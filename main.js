PennController.ResetPrefix(null); 
DebugOff();
// Valeurs par défaut
// (pourquoi dans l'entête ?)
Header(
  defaultText.center().print(),
  defaultButton.center().print().wait()
);

// Organisation de l'expérience
Sequence("EcranPresentation", 
        shuffle("jugement", "filler"), 
        "fin");

// Ecran d'introduction
// fichier html séparé
newTrial("EcranPresentation",
    newHtml("intro", "example_intro.html").print(),
    newButton("Commencer"),
);

Template("stimuli.csv", row =>
    newTrial("jugement",
        newText("instruction", 
        "<p>Merci de noter le degré d'acceptabilité de la phrase :</p>"),
        newText("phrase", row.sentence),
        newText("espacement", " "),
        newScale("jugement", 7)
            .center()
            .radio()
            .labelsPosition("top")
        .before(newText("bien formée "))
         .after(newText("  mal formée"))
        .log().print().wait(),
        newText(" "), // juste pour espacer un peu
        newButton("Valider")
  )
);

Template("fillers.csv", row =>
    newTrial("filler",
        newText("instruction", 
        "<p>Merci de noter le degré d'acceptabilité de la phrase :</p>"),
        newText("phrase", row.sentence),
        newText("espacement", " ")
        ,
        newScale("jugement", 7)
            .center()
            .radio()
            .labelsPosition("top")
        .before(newText("mal formée "))
        .after(newText(" correcte"))
        .log()
        .print()
        .wait()
        ,
        newText(" ") // juste pour espacer un peu
        ,
        newButton("Valider")
  )
);

// Écran de fin
newTrial("fin",
  newText("<p>Merci pour votre participation !</p>").print(),
  newButton("Terminer"),
);

