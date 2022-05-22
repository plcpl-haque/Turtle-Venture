<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display User From Fetch API</title>
    <style>
        body{
            background-color: black;
            color: white;
        }
    </style>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
    <div class="star">
        <?php

            $api_url = 'https://gorest.co.in/public/v1/users';

            // Read JSON file
            $json_data = file_get_contents($api_url);

            // Decode JSON data into PHP array
            $response_data = json_decode($json_data);

            // All user data exists in 'data' object
            $user_data = $response_data->data;

            // Cut long data into small & select only first 10 records
            $user_data = array_slice($user_data, 0, 9);

            // Print data if need to debug
            //print_r($user_data);

            // Traverse array and display user data
            foreach ($user_data as $user) { ?>
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"><?php echo $user->name ?></h5>
                        <p class="card-text"><?php echo $user->email ?></p>
                        <p class="card-text"><?php echo $user->gender ?></p>
                        <p class="card-text"><?php echo $user->status ?></p>
                    </div>
                </div>
        <?php } ?>
    </div>
</body>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</html>