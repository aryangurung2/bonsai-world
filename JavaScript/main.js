const endDate = "20 Feburary 2024 8:00:00 PM"

        const inputs = document.getElementsByClassName("time")

        function time() {
            const end = new Date(endDate)
            const now = new Date()
            const diff = (end - now);

            if (diff < 0) return;
            // convert into days;
            let days = Math.floor(diff / (1000 * 60 * 60 * 24));
            let hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            let minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
            let seconds = Math.floor(diff % (1000 * 60) / 1000);

            inputs[0].value = days;
            inputs[1].value = hours;
            inputs[2].value = minutes;
            inputs[3].value = seconds;

            inputs[4].value = days;
            inputs[5].value = hours;
            inputs[6].value = minutes;
            inputs[7].value = seconds;

            inputs[8].value = days;
            inputs[9].value = hours;
            inputs[10].value = minutes;
            inputs[11].value = seconds;

            inputs[12].value = days;
            inputs[13].value = hours;
            inputs[14].value = minutes;
            inputs[15].value = seconds;

        }

        // initial call
        time()

        /**
         *  1 day = 24 hrs
         *  1 hr = 60 mins
         *  60 min = 3600 sec
         */

        setInterval(
            () => {
                time()
            },
            1000
        )
        function search()
        {
            alert("Your items has searched");
        }
        function subscribe(){
            alert("Thank you for Subscribe");
        }
