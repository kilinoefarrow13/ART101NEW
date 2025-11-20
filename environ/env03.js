$(document).ready(function() {
    //refactor 1
    let environment = {
        location: "Rio De Janeiro",
        inhabitants: ["Blu", "Nigel", "Linda", "Tulio", "Birds", "People", "Monkeys", "Dogs"]
    };

    let bluBird = {
        species: "bird", 
        type: "spix's macaw", 
        color: "blue", 
        occupation: "pet", 
        belongsTo: "Linda", 
        height: "7 inches", 
        friends: ["Jewel", "Nico", "Pedro", "Luis", "Rafael"]
    };

    //refactor 2
    function createLocationDescription(location, inhabitants) {
        let featured = [inhabitants[0], inhabitants[1], inhabitants[5], inhabitants[4], inhabitants[6]];
        return `<p>This is ${location}, the land of birds!</p>
                <p>Who lives here: ${featured.join(", ")}!</p>`;
    }

    function createBirdIntroduction(bird) {
        let topFriends = bird.friends.slice(0, 2).join(" and ");
        return `<p>Meet Blue: Species - ${bird.species}, Type - ${bird.type}, 
                Color - ${bird.color}, Occupation - ${bird.occupation}, 
                Belongs to - ${bird.belongsTo}, Friends - ${topFriends}</p>`;
    }

    let content = createLocationDescription(environment.location, environment.inhabitants) + 
                   createBirdIntroduction(bluBird);
    $("#output").html(content);

    //refactor 3
    let ColorChanger = {
        colors: ["Red", "Pink", "Yellow", "Blue", "Purple"],
        currentIndex: 0,

        getNextColor: function() {
            this.currentIndex = (this.currentIndex + 1) % this.colors.length;
            return this.colors[this.currentIndex];
        },

        applyColor: function(color) {
            $("#needy-button").html(`Color: ${color}`);
            $("body").css("background-color", color);
        },

        changeColor: function() {
            let nextColor = this.getNextColor();
            this.applyColor(nextColor);
        }
    };

    $("#needy-button").click(function() {
        ColorChanger.changeColor();
    });

    //refactor 4
    let BirdAnimation = {
        isMoving: true,
        animationDistance: "1000px",
        animationDuration: 2000,

        animate: function() {
            if (this.isMoving) {
                let self = this;
                $("#bluepic")
                    .animate({left: this.animationDistance}, this.animationDuration)
                    .animate({left: "0px"}, this.animationDuration, function() {
                        self.animate();
                    });
            }
        },
        toggle: function() {
            if (this.isMoving) {
                $("#bluepic").stop(true, true);
                this.isMoving = false;
            } else {
                this.isMoving = true;
                this.animate();
            }
        },
        init: function() {
            let self = this;
            $("#bluepic").click(function() {
                self.toggle();
            });
            this.animate();
        }
    };
    BirdAnimation.init();
    $("#cloudone").hover(
        function() { 
            $("#text").text("Make it rain!"); 
        },
        function() { 
            $("#text").text("Going so soon?"); 
        }
    ); });