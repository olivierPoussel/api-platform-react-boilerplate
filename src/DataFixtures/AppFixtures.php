<?php

namespace App\DataFixtures;

use App\Entity\Article;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = Factory::create("fr_FR");
        $faker->seed(0);

        for ($i=0; $i < 50; $i++) { 
            $article = new Article();
            $article
                ->setTitle($faker->sentence(rand(2,4)))
                ->setDescription($faker->text())
                ->setContent($faker->paragraph())
            ;

            $manager->persist($article);
        }

        $manager->flush();
    }
}
