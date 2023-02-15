@echo on
echo "----------------"
echo "--- Tests in pw4"
echo "----------------"
set TT=C:\cprojects\github\khtan-private\LearningPlaywright\ts\reproProblem\pw4
docker run --volume %TT%:/tests --rm --ipc=host pw4:v2

echo "---------------------"
echo "--- Tests in pw4tests"
echo "---------------------"
set TT=C:\cprojects\github\khtan-private\LearningPlaywright\ts\reproProblem\pw4tests
docker run --volume %TT%:/tests --rm --ipc=host pw4:v2
